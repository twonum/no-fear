"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Link as ChakraLink,
  Box as ChakraBox,
  Text as ChakraText,
} from "@chakra-ui/react";
import React, { useState } from "react";

const DevPlayground = () => {
  const [showCode, setShowCode] = useState(false);

  return (
    <ChakraBox className="min-h-screen bg-transparent text-white px-6 py-8 mt-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <ChakraText className="text-4xl font-extrabold text-teal-300 drop-shadow-md">
            Developer&apos;s Playground
          </ChakraText>
          <ChakraText className="text-lg text-teal-200 mt-2">
            Explore, test, and refine the AI-based Surveillance Detection System
            in style.
          </ChakraText>
        </div>

        {/* Collapsible Sections */}
        <Accordion type="single" collapsible>
          {/* Abstract Section */}
          <AccordionItem value="abstract">
            <AccordionTrigger className="text-teal-300 font-bold text-lg hover:text-teal-400 transition duration-300">
              Abstract
            </AccordionTrigger>
            <AccordionContent className="text-teal-100">
              Advanced AI-powered systems are in high demand for surveillance,
              enhancing security and threat detection. This project uses deep
              learning models (COCO SSD dataset) for real-time detection of
              individuals and potential threats with high accuracy, featuring
              automated alarms and notifications.
            </AccordionContent>
          </AccordionItem>

          {/* Introduction Section */}
          <AccordionItem value="introduction">
            <AccordionTrigger className="text-teal-300 font-bold text-lg hover:text-teal-400 transition duration-300">
              Introduction
            </AccordionTrigger>
            <AccordionContent className="text-teal-100">
              AI-powered surveillance systems overcome traditional drawbacks
              like delayed response and manual intervention. This system
              leverages object detection techniques to identify threats and
              improve real-time monitoring accuracy.
            </AccordionContent>
          </AccordionItem>

          {/* Methodology */}
          <AccordionItem value="methodology">
            <AccordionTrigger className="text-teal-300 font-bold text-lg hover:text-teal-400 transition duration-300">
              Methodology
            </AccordionTrigger>
            <AccordionContent className="text-teal-100 space-y-4">
              <ChakraText>
                The methodology includes using pre-trained object detection
                models (YOLO, SSD, Faster R-CNN) fine-tuned on the COCO dataset.
                The models are benchmarked for speed and accuracy to handle
                real-time analysis.
              </ChakraText>
              <Button
                //@ts-ignore
                variant="secondary"
                className="mt-4 hover:bg-teal-500 transition duration-300"
                onClick={() => setShowCode(!showCode)}
              >
                {showCode ? "Hide Code Example" : "Show Code Example"}
              </Button>
              {showCode && (
                <ChakraBox className="mt-4 bg-transparent p-4 rounded-md shadow-md border border-teal-300">
                  <ChakraText className="font-mono text-sm text-teal-100">
                    {`const detectObjects = (image) => {
  const model = loadModel('yolo');
  return model.predict(image);
};`}
                  </ChakraText>
                </ChakraBox>
              )}
            </AccordionContent>
          </AccordionItem>

          {/* Model Comparison */}
          <AccordionItem value="model-comparison">
            <AccordionTrigger className="text-teal-300 font-bold text-lg hover:text-teal-400 transition duration-300">
              Model Comparison
            </AccordionTrigger>
            <AccordionContent>
              <Table className="mt-4 bg-transparent text-teal-100">
                <TableHeader>
                  <TableRow>
                    <TableHead>Model</TableHead>
                    <TableHead>Speed</TableHead>
                    <TableHead>Accuracy</TableHead>
                    <TableHead>Best For</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>YOLO</TableCell>
                    <TableCell>Very High</TableCell>
                    <TableCell>Moderate</TableCell>
                    <TableCell>Real-time surveillance</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>SSD</TableCell>
                    <TableCell>High</TableCell>
                    <TableCell>High</TableCell>
                    <TableCell>Balanced real-time tasks</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Faster R-CNN</TableCell>
                    <TableCell>Moderate</TableCell>
                    <TableCell>Very High</TableCell>
                    <TableCell>Detailed offline analysis</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* References */}
        <div>
          <ChakraText className="text-lg font-bold text-teal-300">
            References
          </ChakraText>
          <div className="mt-2 space-y-2">
            <ChakraLink
              href="#"
              className="text-teal-400 hover:text-teal-500 hover:underline transition duration-300"
              target="_blank"
            >
              YOLO: Real-Time Object Detection (Redmon et al.)
            </ChakraLink>
            <ChakraLink
              href="#"
              className="text-teal-400 hover:text-teal-500 hover:underline transition duration-300"
              target="_blank"
            >
              SSD: Single Shot MultiBox Detector (Liu et al.)
            </ChakraLink>
            <ChakraLink
              href="#"
              className="text-teal-400 hover:text-teal-500 hover:underline transition duration-300"
              target="_blank"
            >
              Faster R-CNN: Towards Real-Time Object Detection (Ren et al.)
            </ChakraLink>
          </div>
        </div>
      </div>
    </ChakraBox>
  );
};

export default DevPlayground;
