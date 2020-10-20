import {AxiosInstance} from 'axios';
import HttpClient from './HttpClient';

export default abstract class BaseService {
  private static httpClient: AxiosInstance = HttpClient;

  protected static resourcePath = '';

  public static async index(filters = {}): Promise<[]> {
    const {data} = await this.httpClient.get(this.resourcePath, {data: filters});
    return data;
  }
}
