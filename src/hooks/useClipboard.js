import {useState} from 'react';
import {Clipboard} from 'react-native';

const useClipboard = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [value, setValue] = useState('');

  const onCopy = async function (copyStr) {
    if (Clipboard) {
      await Clipboard.setString(copiedValue);
    }
    setValue(copiedValue);
    setHasCopied(true);
  };

  return {
    onCopy,
    value,
    hasCopied,
  };
};
