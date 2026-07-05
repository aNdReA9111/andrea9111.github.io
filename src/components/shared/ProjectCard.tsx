import { Box, Button, Card, Group, Image, Stack, Text, useMantineColorScheme } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  featured?: boolean;
}

const cardEase = [0.16, 1, 0.3, 1] as const;

export function ProjectCard({ title, description, image, link, featured = false }: ProjectCardProps) {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.7, ease: cardEase }}
      style={{ height: '100%' }}
    >
      <Card
        component="a"
        href={link}
        target="_blank"
        rel="noreferrer"
        radius="xl"
        p={0}
        withBorder
        style={{
          height: '100%',
          overflow: 'hidden',
          background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.8)',
          borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.08)',
          boxShadow: isDark ? '0 24px 60px rgba(0,0,0,0.18)' : '0 24px 60px rgba(15,23,42,0.08)',
          transition: 'transform 0.25s ease, border-color 0.25s ease',
        }}
        styles={{
          root: {
            '&:hover': {
              transform: 'translateY(-4px)',
              borderColor: 'rgba(5,150,105,0.28)',
            },
          },
        }}
      >
        <Box style={{ position: 'relative' }}>
          <Box style={{ aspectRatio: featured ? '16 / 9' : '16 / 10', overflow: 'hidden', background: 'rgba(0,0,0,0.08)' }}>
            <Image
              src={image}
              alt={title}
              h="100%"
              fit="cover"
              style={{
                width: '100%',
                height: '100%',
                transform: 'scale(1.001)',
                transition: 'transform 0.35s ease, filter 0.35s ease',
                filter: isDark ? 'brightness(0.88) contrast(1.05)' : 'brightness(0.96) contrast(1.04)',
              }}
            />
          </Box>
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.45) 100%)',
              pointerEvents: 'none',
            }}
          />
        </Box>

        <Stack gap="md" p={featured ? 'xl' : 'lg'}>
          <Box>
            <Text fw={900} size={featured ? 'xl' : 'lg'} style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              {title}
            </Text>
            <Text size="sm" c="dimmed" mt={6} style={{ lineHeight: 1.6 }}>
              {description}
            </Text>
          </Box>

          <Group justify="space-between" align="center">
            <Text size="xs" c="emerald.5" fw={800} tt="uppercase" style={{ letterSpacing: '0.14em' }}>
              View project
            </Text>
            <Button variant="light" color="emerald" rightSection={<IconExternalLink size={16} />}>
              Open
            </Button>
          </Group>
        </Stack>
      </Card>
    </motion.div>
  );
}