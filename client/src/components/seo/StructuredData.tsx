import { Helmet } from 'react-helmet';

interface StructuredDataProps {
  schema: Record<string, unknown>;
}

function StructuredData({ schema }: StructuredDataProps) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export default StructuredData;
