import { Global, Module, DynamicModule, Provider, Type } from '@nestjs/common';
import { JsForceConfigAsyncOptions, JsForceConfigOptionsFactory, JsForceConfigOptions } from './common/interfaces';
import { createJsForceProviders } from './providers';
import { JSFORCE_MODULE_OPTIONS, JSFORCE_TOKEN, createJsForceClient } from './common';

@Global()
@Module({})
export class JsForceCoreModule {

    public static forRoot(options: JsForceConfigOptions): DynamicModule {
        const provider = createJsForceProviders(options);

        return {
            exports: [provider,],
            module: JsForceCoreModule,
            providers: [provider]
        };
    }

    public static forRootAsync(options: JsForceConfigAsyncOptions): DynamicModule {
        const provider: Provider = {
            inject: [JSFORCE_MODULE_OPTIONS],
            provide: JSFORCE_TOKEN,
            useFactory: (options: JsForceConfigOptions) => createJsForceClient(options),
        };

        return {
            exports: [provider],
            imports: options.imports,
            module: JsForceCoreModule,
            providers: [...this.createAsyncProviders(options), provider]
        };
    }

    private static createAsyncProviders(
        options: JsForceConfigAsyncOptions,
    ): Provider[] {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        const useClass = options.useClass as Type<JsForceConfigOptionsFactory>;
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: useClass,
                useClass,
            },
        ];
    }

    private static createAsyncOptionsProvider(
        options: JsForceConfigAsyncOptions,
    ): Provider {
        if (options.useFactory) {
            return {
                inject: options.inject || [],
                provide: JSFORCE_MODULE_OPTIONS,
                useFactory: options.useFactory,
            };
        }
        const inject = [
            (options.useClass || options.useExisting) as Type<JsForceConfigOptionsFactory>,
        ];
        return {
            provide: JSFORCE_MODULE_OPTIONS,
            useFactory: async (optionsFactory: JsForceConfigOptionsFactory) =>
                await optionsFactory.createJsForceOptions(),
            inject,
        };
    }
}