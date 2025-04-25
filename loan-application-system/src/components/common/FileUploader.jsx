import { Input, FormLabel } from '@chakra-ui/react';

const FileUploader = ({ label, onChange }) => (
    <div>
        <FormLabel>{label}</FormLabel>
        <Input type="file" onChange={onChange} mb={4} />
    </div>
);

export default FileUploader;
