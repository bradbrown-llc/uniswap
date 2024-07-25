FROM denoland/deno:alpine-1.43.1 AS build
COPY . .
RUN deno run -A compile.ts

FROM cat AS cat

FROM scratch
LABEL org.opencontainers.image.source=https://github.com/bradbrown-llc/uniswap
COPY --from=build results .
COPY --from=cat cat .
CMD [ "/cat", "/results" ]