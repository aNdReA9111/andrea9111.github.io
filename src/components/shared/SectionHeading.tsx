import { Box, Flex, Text } from '@mantine/core';

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Flex justify="space-between" align="flex-end" gap="md" wrap="wrap" mb="xl">
      <Box>
        <Text size="xs" tt="uppercase" fw={800} c="dimmed" mb="xs" style={{ letterSpacing: '0.2em' }}>
          {eyebrow}
        </Text>
        <Text fw={900} style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', letterSpacing: '-0.04em', lineHeight: 1.05 }}>
          {title}
        </Text>
        {description ? (
          <Text mt="sm" c="dimmed" style={{ maxWidth: 720, lineHeight: 1.7 }}>
            {description}
          </Text>
        ) : null}
      </Box>

    </Flex>
  );
}