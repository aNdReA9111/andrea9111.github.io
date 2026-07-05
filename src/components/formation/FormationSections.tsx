import { Badge, Box, Card, Flex, Image, Text, useMantineColorScheme } from '@mantine/core';
import { motion } from 'framer-motion';
import { cv } from '../../data';
import { SectionHeading } from '../shared/SectionHeading';

const appleEase = [0.16, 1, 0.3, 1] as const;

type EducationEntry = (typeof cv.education)[number];
type ExperienceEntry = (typeof cv.experience)[number];

function getSurfaceStyles(isDark: boolean) {
  return {
    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.7)',
    border: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.08)',
    boxShadow: isDark ? '0 24px 64px rgba(0, 0, 0, 0.22)' : '0 24px 64px rgba(15, 23, 42, 0.08)',
  };
}

function EducationCard({ item, index, isDark }: { item: EducationEntry; index: number; isDark: boolean }) {
  const surfaceStyles = getSurfaceStyles(isDark);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.985, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: appleEase }}
    >
      <Card radius="28px" padding="xl" style={surfaceStyles}>
        <Flex gap={{ base: 'lg', md: 'xl' }} align="stretch" direction={{ base: 'column', md: 'row' }}>
          <Box style={{ flex: '0 0 300px', width: '100%', minWidth: 0 }}>
            <Box
              style={{
                aspectRatio: '4 / 3',
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'rgba(0,0,0,0.05)',
                border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(15,23,42,0.08)',
              }}
            >
              <Image
                src={item.icon}
                alt={item.institution}
                h="100%"
                fit="contain"
                style={{ width: '100%', height: '100%', padding: '1.25rem' }}
              />
            </Box>
          </Box>

          <Box style={{ flex: 1, display: 'grid', alignContent: 'center' }}>
            <Flex justify="space-between" align="flex-start" gap="md" wrap="wrap" mb="sm">
              <Box>
                <Text fw={900} size="xl" style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}>
                  {item.title}
                </Text>
                <Text size="sm" c="emerald.5" fw={700} mt={5}>
                  {item.institution}
                </Text>
              </Box>
              <Badge variant="light" color="gray" radius="xl">
                {item.year}
              </Badge>
            </Flex>

            <Text size="sm" c="dimmed" style={{ lineHeight: 1.85, maxWidth: 760 }}>
              {item.description}
            </Text>
          </Box>
        </Flex>
      </Card>
    </motion.div>
  );
}

function ExperienceCard({ item, index, isDark }: { item: ExperienceEntry; index: number; isDark: boolean }) {
  const surfaceStyles = getSurfaceStyles(isDark);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.985, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: appleEase }}
    >
      <Card radius="28px" padding="xl" style={surfaceStyles}>
        <Flex gap={{ base: 'lg', md: 'xl' }} align="stretch" direction={{ base: 'column', md: 'row' }}>
          <Box style={{ flex: '0 0 300px', width: '100%', minWidth: 0 }}>
            <Box
              style={{
                aspectRatio: '4 / 3',
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'linear-gradient(145deg, rgba(5,150,105,0.22), rgba(5,150,105,0.06))',
                border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(15,23,42,0.08)',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Box
                style={{
                  width: '74%',
                  minHeight: 110,
                  borderRadius: '24px',
                  background: isDark ? 'rgba(236,253,245,0.08)' : 'rgba(5,150,105,0.08)',
                  border: '1px solid rgba(5,150,105,0.22)',
                  display: 'grid',
                  placeItems: 'center',
                  padding: '1rem',
                }}
              >
                <Text fw={900} size="xl" c="emerald.5" ta="center" style={{ lineHeight: 1.2 }}>
                  {item.period}
                </Text>
              </Box>
            </Box>
          </Box>

          <Box style={{ flex: 1, display: 'grid', alignContent: 'center' }}>
            <Flex justify="space-between" align="flex-start" gap="md" wrap="wrap" mb="xs">
              <Box>
                <Text fw={900} size="xl" style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}>
                  {item.role}
                </Text>
                <Text size="sm" c="emerald.5" fw={700} mt={5}>
                  {item.company}
                </Text>
              </Box>
              <Badge variant="outline" color="emerald" radius="xl">
                {item.period}
              </Badge>
            </Flex>

            <Text size="sm" c="dimmed" style={{ lineHeight: 1.85, maxWidth: 760 }}>
              {item.description}
            </Text>
          </Box>
        </Flex>
      </Card>
    </motion.div>
  );
}

export function EducationSection() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Box>
      <SectionHeading eyebrow="Formation" title="Education" description="Academic background and certifications." />
      <Box style={{ display: 'grid', gap: 16 }}>
        {cv.education.map((item, index) => (
          <EducationCard key={`${item.title}-${item.year}`} item={item} index={index} isDark={isDark} />
        ))}
      </Box>
    </Box>
  );
}

export function ExperienceSection() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Box>
      <SectionHeading eyebrow="Trajectory" title="Experience" description="Hands-on teaching and technical work translated into concise, readable milestones." />
      <Box style={{ display: 'grid', gap: 16 }}>
        {cv.experience.map((item, index) => (
          <ExperienceCard key={`${item.role}-${item.period}`} item={item} index={index} isDark={isDark} />
        ))}
      </Box>
    </Box>
  );
}