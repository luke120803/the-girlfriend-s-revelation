import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Image, Text } from '@react-three/drei';
import * as THREE from 'three';
import anime from 'animejs';
import { ALBUM_PAGES } from '@/content/album';

const COVER_COLOR = '#7f1d1d'; // accent-dark

export function AlbumModel({ isOpen, currentPage, onOpen, onSelectPhoto }) {
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
        easing: 'easeInOutSine',
      });
    }
  }, [isOpen]);

  // Animação de virada de página
  useEffect(() => {
    pagesRef.current.forEach((page, index) => {
      if (page) {
        anime({
          targets: page.rotation,
          y: index < currentPage ? -Math.PI : 0,
          duration: 1200,
          easing: 'easeInOutSine',
        });
      }
    });
  }, [currentPage]);

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />

      {/* Capa */}
      <group ref={coverRef} onClick={onOpen}>
        <mesh>
          <boxGeometry args={[3, 4.5, 0.1]} />
          <meshStandardMaterial color={COVER_COLOR} />
        </mesh>
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="center"
        >
          Nosso Álbum
        </Text>
      </group>

      {/* Páginas */}
      {ALBUM_PAGES.map((page, pageIndex) => (
        <group key={pageIndex} ref={(el) => (pagesRef.current[pageIndex] = el!)}>
          <mesh position={[0, 0, -0.01 * pageIndex]}>
            <boxGeometry args={[3, 4.5, 0.05]} />
            <meshStandardMaterial color="white" />
          </mesh>
          {page.photos.map((photo, photoIndex) => (
            <Image
              key={photo.id}
              url={photo.url}
              position={[photoIndex % 2 === 0 ? -0.75 : 0.75, photoIndex < 2 ? 1 : -1, 0.03]}
              scale={[1.2, 1.8, 1]}
              onClick={() => onSelectPhoto(photo)}
            />
          ))}
        </group>
      ))}
    </>
  );
}
