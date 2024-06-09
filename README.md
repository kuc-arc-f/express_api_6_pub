# express_api_6_pub

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2024/06/09

 update : 2024/06/09

***

express + postgres , typescript sample

***
### setup

* .env

```
POSTGRES_DATABASE="postgres"
POSTGRES_USER=""
POSTGRES_PASSWORD=""
POSTGRES_HOST=""
POSTGRES_PORT=6543
```

***
* table: Todo

```
CREATE TABLE public."Todo" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    title character varying(255) NOT NULL,
    content text,
    complete integer,
    "userId" text
);
```
***
### Build

```
# start
yarn build

# dev-start
yarn dev
```
***
### blog

***

