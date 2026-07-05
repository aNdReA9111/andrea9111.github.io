import { Box, Container, useMantineColorScheme } from '@mantine/core';
import { motion } from 'framer-motion';
import { EducationSection, ExperienceSection } from '../components/formation/FormationSections';

export function Formation() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Box style={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? 'radial-gradient(circle at top left, rgba(5, 150, 105, 0.12), transparent 30%), radial-gradient(circle at top right, rgba(16, 185, 129, 0.08), transparent 24%)'
            : 'radial-gradient(circle at top left, rgba(5, 150, 105, 0.09), transparent 32%), radial-gradient(circle at top right, rgba(16, 185, 129, 0.05), transparent 24%)',
          pointerEvents: 'none',
        }}
      />

      <Container size="lg" py={{ base: '4.5rem', md: '6rem' }} style={{ position: 'relative', zIndex: 1 }}>

        <Box style={{ display: 'grid', gap: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
          >
            <EducationSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.08 }}
          >
            <ExperienceSection />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}