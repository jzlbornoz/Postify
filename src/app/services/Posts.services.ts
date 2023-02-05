import { PostsModel } from "@/models/post.model";
import axios from "axios";

export class Post {
  private api = "https://jsonplaceholder.typicode.com/posts";

  async getAllPost(): Promise<PostsModel[]> {
    const { data } = await axios.get<PostsModel[]>(this.api);
    return data;
  }
  async getPostById(id: PostsModel["id"] | string[] = 1): Promise<PostsModel> {
    const { data } = await axios.get<PostsModel>(`${this.api}/${id}`);
    return data;
  }
}
