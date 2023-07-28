
import React, { ChangeEvent } from 'react';

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea value={value} onChange={onChange} />
    </div>
  );
};

export default TextArea;
