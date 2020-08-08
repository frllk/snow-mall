import { request } from '@/utils/request';
/**
 * 这里写异步请求
 */

export async function queryCurrent(): Promise<any> {
  return request('/api/currentUser')
}