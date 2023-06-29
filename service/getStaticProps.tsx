export async function getStaticProps() {
       const API_KEY= process.env.API_KEY
        

       return {
        props: {
            hello: 'w'
        }
       }
  }