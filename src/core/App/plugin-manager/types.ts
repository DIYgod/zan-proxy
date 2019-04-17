import koa from 'koa';

import { IProxyMiddlewareFn } from '../types/proxy';

export interface IPluginInfo {
  name: string;
  disabled?: boolean;
  version: string;
}

export interface IPluginClass {
  manage: () => koa;
  proxy: () => IProxyMiddlewareFn;
}

export type IPluginModule = IPluginInfo & IPluginClass;