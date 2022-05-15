import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostId, getPostData } from "../../utils/posts";

import utilStyles from '../../styles/utils.module.css'
import DateFormated from "../../components/Date";

export interface PostData{
    postData: PostInfo
}
export interface  PostInfo{
    title: string,
    date: string,
    contentHtml: string,
    id?:string,
}

export default function Post({postData}:PostData){

    const date = new Intl.DateTimeFormat('es-ES',{
        weekday:'long',
        era:'long',
        month:'narrow',
        day: "2-digit"
    }).format(new Date(postData.date))

    return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <h3 className={utilStyles.headingX1}>{postData.title}</h3>
        <DateFormated date={postData.date}/>
        <br />
        <article dangerouslySetInnerHTML={{__html: postData.contentHtml}}>
            
        </article>
    </Layout>)
}

export async function getStaticPaths(){
    //Return a list of possible value for id
    const paths = getAllPostId();
    return {
        paths,
        fallback : false,
    }
    
}

export async function getStaticProps({params}:any) {
   const postData = await getPostData(params.id as string)
   return {
       props:{
           postData,
       }
   }
}   