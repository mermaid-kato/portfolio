FROM ruby:3.1
ARG RUBYGEMS_VERSION=3.3.20

# WORKDIRは指定したディレクトリがなければ自動で作成する
WORKDIR /backend
COPY Gemfile* /backend/

RUN gem update --system ${RUBYGEMS_VERSION} && \
    bundle install
COPY . /backend

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
