import { generateRoutes, generateSwaggerSpec, RoutesConfig, SwaggerConfig } from 'tsoa'

(async () => {
  const swaggerOptions: SwaggerConfig = {
    basePath: '/api',
    entryFile: './api/server.ts',
    specVersion: 3,
    outputDirectory: './api/dist',
    controllerPathGlobs: ['./controllers/*Controller.ts'],
  }
 
  const routeOptions: RoutesConfig = {
    basePath: '/api',
    entryFile: './api/server.ts',
    routesDir: './api',
  }
 
  await generateSwaggerSpec(swaggerOptions, routeOptions)
 
  await generateRoutes(routeOptions, swaggerOptions)
})();