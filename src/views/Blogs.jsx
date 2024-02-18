import { Accordion, Card, Button } from 'react-bootstrap';

function Blogs() {
  const blogPosts = [
    { id: '1', title: 'Understanding React Hooks', content: 'React Hooks are a powerful feature introduced in React 16.8...' },
    { id: '2', title: 'Tips for Effective Async Await', content: 'Asynchronous JavaScript can be tricky, but async/await syntax has made it much cleaner...' },
    { id: '3', title: 'Styling in React: Best Practices', content: 'There are many ways to style React components, from plain CSS to using libraries...' },
  ];

  return (
    <Accordion defaultActiveKey="0" className="mt-3">
      {blogPosts.map((post, index) => (
        <Card key={post.id}>
          <Accordion.Item eventKey={String(index)}>
            <Accordion.Header>{post.title}</Accordion.Header>
            <Accordion.Body>{post.content}</Accordion.Body>
          </Accordion.Item>
        </Card>
      ))}
    </Accordion>
  );
}

export default Blogs;
