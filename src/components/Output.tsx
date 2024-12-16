/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { executeCode } from "../api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

// @ts-ignore
const Output = ({ editorRef, language }) => {
  const { toast } = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred",
        // @ts-ignore
        description: error.message || "Unable to run code",
        // @ts-ignore
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-1/2">
      <h2 className="mb-2 text-lg font-medium">Output</h2>
      <Button
        className="mb-4 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
        // @ts-ignore
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
      <Card
        className={`h-[75vh] p-4 ${
          isError ? "border-red-500 text-red-400" : "border-gray-300"
        }`}
      >
        <CardContent>
          {output ? (
            //@ts-ignore
            output.map((line, i) => <p key={i}>{line}</p>)
          ) : (
            <p>Click "Run Code" to see the output here</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Output;
