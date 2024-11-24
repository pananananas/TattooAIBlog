import { BlogPosts } from 'app/components/posts'
import CardStack from 'app/components/card-stack'

export default function Page() {

  const images_folder_1 = [
    {
      id: 112,
      name: 'stills1.jpg',
      url: 'https://utfs.io/a/oxjj5brc17/00b7997e-e7ba-4dce-b7d3-aa39024c47eb-v98w8q.jpg',
      key: '00b7997e-e7ba-4dce-b7d3-aa39024c47eb-v98w8q.jpg',
      userId: 'user_2in3UILMe9K8MAOKBRmISHOk93R',
      folderId: 1,
      updatedAt: null
    },
    {
      id: 111,
      name: 'stills2.jpg',
      url: 'https://utfs.io/a/oxjj5brc17/3e46ded2-04ef-468f-8307-7623d413cd4f-v98w8p.jpg',
      key: '3e46ded2-04ef-468f-8307-7623d413cd4f-v98w8p.jpg',
      userId: 'user_2in3UILMe9K8MAOKBRmISHOk93R',
      folderId: 1,
      updatedAt: null
    },
    {
      id: 110,
      name: 'stills3.jpg',
      url: 'https://utfs.io/a/oxjj5brc17/41137c27-e2b7-41bb-8ba6-ffafd8a335fc-v98w8o.jpg',
      key: '41137c27-e2b7-41bb-8ba6-ffafd8a335fc-v98w8o.jpg',
      userId: 'user_2in3UILMe9K8MAOKBRmISHOk93R',
      folderId: 1,
      updatedAt: null
    },
    {
      id: 109,
      name: 'concept_2.jpg',
      url: 'https://utfs.io/a/oxjj5brc17/a1a4255d-fc5e-45ed-bfa9-c80154020bcc-es41d1.jpg',
      key: 'a1a4255d-fc5e-45ed-bfa9-c80154020bcc-es41d1.jpg',
      userId: 'user_2in3UILMe9K8MAOKBRmISHOk93R',
      folderId: 1,
      updatedAt: null
    },
    {
      id: 108,
      name: 'concept_1.jpg',
      url: 'https://utfs.io/a/oxjj5brc17/c0aa504b-4f46-4939-917a-bcc88b55057c-es41d2.jpg',
      key: 'c0aa504b-4f46-4939-917a-bcc88b55057c-es41d2.jpg',
      userId: 'user_2in3UILMe9K8MAOKBRmISHOk93R',
      folderId: 1,
      updatedAt: null
    }
  ]
  
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter font-mono">
        Tattoo AI
      </h1>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
      <div className="flex justify-center my-8">
      <CardStack images={images_folder_1} id="stack1" />
      </div>
    </section>
  )
}
