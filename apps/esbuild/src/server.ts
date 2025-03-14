import { createServer } from '@nx/angular-rsbuild/ssr';
import bootstrap from './main.server';

const server = createServer(bootstrap);

server.listen();
