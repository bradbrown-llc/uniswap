FROM denoland/deno:alpine-1.43.1 AS build
COPY . .
RUN deno run -A compile.ts

FROM bradthomasbrown/cat:1.0 AS cat

FROM scratch
COPY --from=build results .
COPY --from=cat cat .
CMD [ "/cat", "/results" ]