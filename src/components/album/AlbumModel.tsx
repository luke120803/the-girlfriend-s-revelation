import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Image, Text } from "@react-three/drei";
import * as THREE from "three";
import anime from "animejs";
import { ALBUM_PAGES } from "@/content/album";

const COVER_COLOR = "#7f1d1d"; // accent-dark

interface Photo {
  id: number;
  url: string;
  caption: string;
}

interface AlbumModelProps {
  isOpen: boolean;
  currentPage: number;
  onOpen: () => void;
  onSelectPhoto: (photo: Photo) => void;
}

export function AlbumModel({
  isOpen,
  currentPage,
  onOpen,
  onSelectPhoto,
}: AlbumModelProps) {
  const coverRef = useRef<THREE.Group>(null);
  const pagesRef = useRef<THREE.Group[]>([]);

  useEffect(() => {
    pagesRef.current = pagesRef.current.slice(0, ALBUM_PAGES.length);
  }, []);

  // Animação de abertura da capa
  useEffect(() => {
    if (isOpen && coverRef.current) {
      anime({
        targets: coverRef.current.rotation,
        y: -Math.PI,
        duration: 1200,
        easing: "easeInOutSine",
      });
    }
  }, [isOpen]);

  // Animação de virada de página
  useEffect(() => {
    pagesRef.current.forEach((page, index) => {
      if (page) {
        anime({
          targets: page.rotation,
          y: index < currentPage ? -Math.PI + 0.01 * index : 0, // Pequeno offset para evitar Z-fighting
          duration: 1200,
          easing: "easeInOutSine",
        });
      }
    });
  }, [currentPage]);

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />

      {/* Capa */}
      <group
        ref={coverRef}
        onClick={onOpen}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      >
        <mesh>
          <boxGeometry args={[3, 4.5, 0.1]} />
          <meshStandardMaterial
            color={COVER_COLOR}
            roughness={0.3}
            metalness={0.2}
            attach="material"
          />
        </mesh>
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="center"
          font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD7K_7z2MbD7K_7z2MbD7K_7z2Mc.woff"
        >
          Para Minnie
        </Text>
      </group>

      {/* Páginas */}
      {ALBUM_PAGES.map((page, pageIndex) => (
        <group
          key={pageIndex}
          ref={(el) => (pagesRef.current[pageIndex] = el!)}
          position={[0, 0, -0.02 * pageIndex]}
        >
          <mesh>
            <boxGeometry args={[2.9, 4.4, 0.05]} />
            <meshStandardMaterial
              color="#fffcf9"
              roughness={0.8}
              attach="material"
            />
          </mesh>
          {page.photos.map((photo, photoIndex) => {
            const isLeftPage = photoIndex % 2 === 0;
            return (
              <group
                key={photo.id}
                position={[
                  isLeftPage ? -0.7 : 0.7,
                  photoIndex < 2 ? 1 : -1,
                  0.03,
                ]}
              >
                <Image
                  url={photo.url}
                  scale={[1.2, 1.6, 1]}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPhoto(photo);
                  }}
                  onPointerOver={() => {
                    document.body.style.cursor = "pointer";
                  }}
                  onPointerOut={() => {
                    document.body.style.cursor = "auto";
                  }}
                  transparent
                  opacity={1}
                />
                <Text
                  position={[0, -0.9, 0.01]}
                  fontSize={0.08}
                  color="#4a3728"
                  maxWidth={1.1}
                  textAlign="center"
                >
                  {photo.caption}
                </Text>
              </group>
            );
          })}
        </group>
      ))}
    </>
  );
}
