import { forwardRef, useRef, useEffect } from "react";

export const IndeterminateCheckbox = forwardRef(
  (
    { indeterminate, setContainersToDelete, selectedFlatRows, ...rest },
    ref
  ) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);
