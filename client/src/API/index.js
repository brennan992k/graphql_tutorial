/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const URL_BASE = "http://localhost:4000/api";

export const request = async (query = ``, variables = {}) => {
  const response = await axios.post(
    URL_BASE,
    {
      query,
      variables,
    },
    {
      withCredentials: false,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response?.data;
};

export const useRequest = (request = async () => {}) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(async () => {
    if (!state.loading) await setState({ ...state, loading: true });
    const { data, error } = await request();
    await setState({ ...state, data, error });
    if (!state.loading) await setState({ ...state, loading: false });
  }, [request]);

  useEffect(() => {
    sendRequest();
  }, []);

  return [state, sendRequest];
};

export const getAllArticle = async () => {
  const query = `
    query {
        articleList {
            id
            title
            desc
            categories {
                name
                id
            }
        }
    }`;
  const response = await request(query);
  return {
    data: response?.data?.articleList,
    error: response?.errors?.[0],
  };
};

export const getArticle = async (id) => {
  const query = `
    query getArticle($id: Int!) {
        article(id: $id) {
            id
            title
            desc
            content
            categories {
                name
                id
            }
        }
    }`;
  const response = await request(query, {
    id: parseInt(id),
  });
  return {
    data: response?.data?.article,
    error: response?.errors?.[0],
  };
};

export const createArticle = async (data) => {
  const query = `
  mutation createArticle($data: ArticleCreate!) {
      createArticle(data: $data) {
        status
        data {
          id
        }
      }
  }`;
  const response = await request(query, {
    data: data,
  });
  return {
    data: response?.data?.article,
    error: response?.errors?.[0],
  };
};
