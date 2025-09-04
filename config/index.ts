// 主配置文件
import { DEV_CONFIG } from './development';
import { PROD_CONFIG } from './production';

// 根据 NODE_ENV 选择配置
const isDev = process.env.NODE_ENV === 'development';
export const CONFIG = isDev ? DEV_CONFIG : PROD_CONFIG;

// 导出配置对象
export const ENV_CONFIG = CONFIG;

// 默认导出
export default CONFIG;