async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <div>specific blog: {slug}</div>;
}

export default Blog;
