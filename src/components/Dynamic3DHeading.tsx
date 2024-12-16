import React from "react";

// Add className to props
type Dynamic3DHeadingProps = {
  className?: string;
};

const Dynamic3DHeading: React.FC<Dynamic3DHeadingProps> = ({ className }) => {
  return (
    <h1
      className={`${className} text-4xl font-bold text-white hover:text-gray-400 hover:shadow-lg cursor-cell`}
    >
      Surveillance Detection
    </h1>
  );
};

export default Dynamic3DHeading;

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import React, { useEffect } from "react";
// import * as THREE from "three";
// import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
// import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

// const Dynamic3DHeading = () => {
//   useEffect(() => {
//     const scene = new THREE.Scene();
//     scene.background = null;

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );

//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     const loader = new FontLoader();
//     loader.load(
//       "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
//       (font) => {
//         try {
//           const geometry = new TextGeometry("Surveillance Detection", {
//             font: font,
//             size: 10,
//             height: 3,
//             bevelEnabled: true,
//             bevelSize: 0.2,
//             bevelThickness: 0.5,
//           });

//           const material = new THREE.MeshPhongMaterial({
//             color: 0xffffff,
//             emissive: 0x00ff00,
//           });

//           const textMesh = new THREE.Mesh(geometry, material);
//           scene.add(textMesh);
//           geometry.center();

//           camera.position.z = 50;

//           const ambientLight = new THREE.AmbientLight(0x404040);
//           const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//           directionalLight.position.set(5, 5, 5).normalize();
//           scene.add(ambientLight);
//           scene.add(directionalLight);

//           const animate = () => {
//             requestAnimationFrame(animate);
//             textMesh.rotation.x += 0.01;
//             textMesh.rotation.y += 0.01;
//             renderer.render(scene, camera);
//           };

//           animate();
//         } catch (error) {
//           console.error("Error creating text geometry:", error);
//         }
//       },
//       undefined,
//       (error) => {
//         console.error("Error loading font:", error);
//       }
//     );

//     window.addEventListener("resize", () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     });

//     return () => {
//       document.body.removeChild(renderer.domElement);
//     };
//   }, []);

//   return null;
// };

// export default Dynamic3DHeading;
