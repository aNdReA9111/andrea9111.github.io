import { Badge, Box, Card, Flex, Text, useMantineColorScheme } from '@mantine/core';
import { motion } from 'framer-motion';

const cardEase = [0.16, 1, 0.3, 1] as const;

export type TimelineItem = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  icon?: string;
};

export function TimelineCard({ item, index, align = 'left' }: { item: TimelineItem; index: number; align?: 'left' | 'right' }) {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -72 : 72, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.75, delay: index * 0.06, ease: cardEase }}
    >
      <Card
        radius="xl"
        p="xl"
        withBorder
        style={{
          background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.82)',
          borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.08)',
          boxShadow: isDark ? '0 20px 50px rgba(0,0,0,0.16)' : '0 20px 50px rgba(15,23,42,0.07)',
        }}
      >
        <Flex gap="lg" align="flex-start" direction={{ base: 'column', sm: 'row' }}>
          {item.icon ? (
            <Box
              component="img"
              src={item.icon}
              alt=""
              aria-hidden="true"
              style={{
                width: 64,
                height: 64,
                objectFit: 'contain',
                borderRadius: 18,
                padding: 10,
                background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(15,23,42,0.04)',
                border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(15,23,42,0.08)',
                flexShrink: 0,
              }}
            />
          ) : (
            <Box
              style={{
                width: 64,
                height: 64,
                borderRadius: 18,
                flexShrink: 0,
                background: 'linear-gradient(145deg, rgba(5,150,105,0.28), rgba(5,150,105,0.08))',
                border: '1px solid rgba(5,150,105,0.22)',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Box style={{ width: 14, height: 14, borderRadius: 999, background: '#059669' }} />
            </Box>
          )}

          <Box style={{ flex: 1 }}>
            <Flex justify="space-between" align="flex-start" gap="md" wrap="wrap" mb="xs">
              <Box>
                <Text fw={900} size="lg" style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  {item.title}
                </Text>
                <Text size="sm" c="emerald.5" fw={700} mt={4}>
                  {item.subtitle}
                </Text>
              </Box>
              <Badge variant="light" color="gray" radius="xl">
                {item.period}
              </Badge>
            </Flex>

            <Text size="sm" c="dimmed" style={{ lineHeight: 1.8, maxWidth: 760 }}>
              {item.description}
            </Text>
          </Box>
        </Flex>
      </Card>
    </motion.div>
  );
}