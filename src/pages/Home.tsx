import { Box, Container } from '@mantine/core';
import { motion } from 'framer-motion';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { LandingHero } from '../components/home/LandingHero';

const pageEase = [0.16, 1, 0.3, 1] as const;

export function Home() {
  return (
    <Box>
      <Box
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 15% 10%, rgba(5,150,105,0.12), transparent 22%), radial-gradient(circle at 85% 18%, rgba(14,165,233,0.1), transparent 20%)',
          pointerEvents: 'none',
        }}
      />

      <Container size="lg" py={{ base: '3rem', md: '5rem' }} style={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: pageEase }}>
          <LandingHero />
        </motion.div>

        <FeaturedProjects />
      </Container>
    </Box>
  );
}