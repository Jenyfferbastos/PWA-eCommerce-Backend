FROM ubuntu:18.04

# Install Node.js, Yarn and required dependencies
RUN apt-get update -y \
    && apt-get install -y curl gnupg build-essential \
    && curl --silent --location https://deb.nodesource.com/setup_14.x | bash - \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get remove -y --purge cmdtest \
    && apt-get update \
    && apt-get install -y nodejs yarn \
    # remove useless files from the current layer
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /var/lib/apt/lists.d/* \
    && apt-get autoremove \
    && apt-get clean \
    && apt-get autoclean

# Install Git because package depends on Git
RUN apt-get update -y && apt-get upgrade -y \
    && apt-get install -y git

# Copy project production folders
COPY ./src ./src
COPY ./docs ./docs

# Create envs

ENV NODE_PATH .
ENV NODE_ENV development
ENV MONGOOSE_SECONDS_TO_RETRY_CONNECTION 5
ENV NODE_TLS_REJECT_UNAUTHORIZED 0
ENV APPLICATION_PORT 8080
ENV TZ 'America/Sao_Paulo'
ENV MONGO_DB_URI mongodb+srv://jenyffer:jenyffer2003@cluster0.kcy4mye.mongodb.net/e-commerce?retryWrites=true&w=majority

# Copy config files
COPY ./tsconfig.json ./tsconfig.json
COPY ./tsconfig.build.json ./tsconfig.build.json
COPY ./package.json ./package.json


# install dependencies
RUN npm install @types/node
RUN npm install typescript
RUN npm install chance
RUN npm install --production

# Generate dist
RUN npm run build

# Configure container network
EXPOSE 80 8080 3009

CMD NODE_PATH=dist/ NODE_ENV=$NODE_ENV npm run start