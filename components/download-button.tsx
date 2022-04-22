import { usePDF } from '@react-pdf/renderer';
import { useEffect } from 'react';
import Template from '../utils/export-template';

const DownloadButton = ({ data }: any) => {
  const [instance, updateInstance] = usePDF({
    document: <Template data={data} />,
  });

  useEffect(() => {
    if (data) {
      updateInstance();
    }
  }, [data]);

  if (instance.loading) return <div>Rendering...</div>;

  if (instance.error) return <div>Something went wrong: {instance.error}</div>;

  return (
    <a href={instance.url as string} download="PDF-Export.pdf">
      PDF-Export.pdf
    </a>
  );
};

export default DownloadButton;
