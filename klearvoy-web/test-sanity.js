// 测试 Sanity API 连接
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'k68hiu2m',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skpb2B2qJsej6bcLI3JZQVZ4aRQf8wHs9iCEHJFhur3P4lhrfo0LZ2efYz5UYig2RXn49JIHWvYEVidUCaqRxY45M87PZD38kpboDAHmn53LN9sCyHCPrHq8n1WMmUss9ImHJUEWcMjuUBnrQnJjO4Jea9hlXK1Ije03XymZoluzsv8LpIO2',
});

async function testConnection() {
  try {
    console.log('Testing Sanity API connection...');
    const result = await client.fetch('*[_type == "product"][0...3]');
    console.log('✅ Connected successfully!');
    console.log('Products found:', result.length);
    console.log('Sample:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.log('Error details:', error);
  }
}

testConnection();