import { ActionIcon, Box, Container, Flex, Image, Text, useMantineColorScheme } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { IconMoon, IconSun } from '@tabler/icons-react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Formation', to: '/formation' },
  { label: 'Projects', to: '/projects' },
];

export function SiteHeader() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const location = useLocation();

  return (
    <Box
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        backgroundColor: isDark ? 'rgba(10, 11, 14, 0.72)' : 'rgba(248, 250, 252, 0.78)',
        borderBottom: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(15,23,42,0.06)',
      }}
    >
      <Container size="lg" py="md">
        <Flex justify="space-between" align="center" gap="md" wrap="wrap">
          <Flex component={Link} to="/" align="center" gap="sm" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Image src="/logo.png" alt="Andrea Fiorellino logo" w={32} h={32} fit="contain" />
            <Text fw={900} size="lg" style={{ letterSpacing: '-0.04em' }}>
              Andrea Fiorellino
            </Text>
          </Flex>

          <Flex gap={{ base: 'sm', sm: 'lg' }} align="center" wrap="wrap">
            {navItems.map((item) => {
              const active = location.pathname === item.to;

              return (
                <Text
                  key={item.to}
                  component={Link}
                  to={item.to}
                  size="sm"
                  fw={700}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    opacity: active ? 1 : 0.72,
                    padding: '0.45rem 0.7rem',
                    borderRadius: 999,
                    background: active
                      ? isDark
                        ? 'rgba(255,255,255,0.06)'
                        : 'rgba(15,23,42,0.06)'
                      : 'transparent',
                  }}
                >
                  {item.label}
                </Text>
              );
            })}

            <ActionIcon variant="subtle" color="gray" onClick={() => toggleColorScheme()} radius="xl" aria-label="Toggle color scheme">
              {isDark ? <IconSun size={18} /> : <IconMoon size={18} />}
            </ActionIcon>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}