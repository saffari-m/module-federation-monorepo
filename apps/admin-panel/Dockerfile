FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

# FROM node:21.5.0-alpine as builder
# WORKDIR '/app'
# COPY package.json .
# RUN ls .
# RUN npm install -g pnpm
# COPY /apps/admin-panel/ .
# RUN pnpm run build
# RUN ls .

# FROM nginx
# COPY --from=builder /app/dist /usr/share/nginx/html