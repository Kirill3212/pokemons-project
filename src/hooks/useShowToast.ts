import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

export const useShowToast = () => {
  const toast = useToast();

  const showToast = useCallback(
    (title: string, description:string, status: 'error' | 'success') => {
      toast({
        title: title,
        description: description,
        status: status,
        duration: 1500,
        isClosable: true,
      });
    },
    [toast]
  );

  return showToast;
};

