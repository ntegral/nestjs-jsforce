
[![Codecov Coverage](https://img.shields.io/codecov/c/github/ntegral/nestjs-jsforce/master.svg?style=flat-square)](https://codecov.io/gh/ntegral/nestjs-jsforce)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)


<p align="center">
  <h3 align="center">
    @ntegral/nestjs-jsforce
  </h3>

  <p align="center">
    Provides an injectable jsforce client to provide features to the Salesforce API for your nestjs projects
  </p>
</p>

## Table Of Contents

- [About](#about)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About

`@ntegral/nestjs-force` implements a module, `JsForceModule`, which when imported into
your nestjs project provides a Salesforce Api client to any class that injects it. This
lets Salesforce be worked into your dependency injection workflow without having to
do any extra work outside of the initial setup.

## Installation

```bash
npm install --save @ntegral/nestjs-force jsforce
```

## Getting Started

The simplest way to use `@ntegral/nestjs-force` is to use `JsForceModule.forRoot`

```typescript
import { Module } from '@nestjs-common';
import { JsForceModule } from '@ntegral/nestjs-force';

@Module({
  imports: [
    JsForceModule.forRoot({
      username: 'some.user@salesforce-env.com.sb01',
      password: 'account_password',
      security_token: 'token_value',
      options: {
          loginUrl: 'https://salesforce-env--sb01.my.salesforce.com/'
      }
    }),
  ],
})
export class AppModule {}
```

You can then inject the JsForce client into any of your injectables by using a
custom decorator

```typescript
import { Injectable } from '@nestjs/common';
import { InjectJsForce } from '@ntegral/nestjs-force';
import { Client } from '@ntegral/nestjs-force';

@Injectable()
export class AppService {
  public constructor(@InjectJsForce private readonly client: Client) {}

  listContacts() {
    let contacts = any[];
    this.client.conn.sobject("Contact").select().exec(undefined,(err, result) => {
        if (err) { return console.error(err); }
        console.log('results', result);
        contacts = result;
    });
    return contacts;
  }
}
```

Asynchronous setup is also supported

```typescript
import { Module } from '@nestjs-common';
import { ConfigModule } from '../common/config/config.module';
import { ConfigService } from '../common/config/config.service';
import { JsForceModule } from '@ntegral/nestjs-force';

@Module({
  imports: [
    JsForceModule.forRootAsync({
      imports: [ConfigModule],  
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        username: 'some.user@salesforce-env.com.sb01',
        password: 'account_password',
        security_token: 'token_value',
        options: {
            loginUrl: 'https://salesforce-env--sb01.my.salesforce.com/'
        }
      }),
    }),
  ],
})
export class AppModule {}
```

## Contributing

I would greatly appreciate any contributions to make this project better. Please
make sure to follow the below guidelines before getting your hands dirty.

1. Fork the repository
2. Create your branch (`git checkout -b my-branch`)
3. Commit any changes to your branch
4. Push your changes to your remote branch
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [nestjs](https://nestjs.com)
- [jsforce](https://jsforce.github.io)

Copyright &copy; 2019 Ntegral Inc.
