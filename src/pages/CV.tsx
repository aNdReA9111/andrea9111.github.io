import { Container, Title, Stack, Card, Text, Group, Badge, Image, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { cv } from "../data/cv";

export function CV() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Container py="xl">
      <Title order={2} mb="lg">
        Curriculum Vitae
      </Title>

      <Stack gap="lg">
        {/* Education */}
        <section>
          <Title order={3}>Education</Title>

          {cv.education.map((edu) => (
            <Card key={edu.title} shadow="sm" mt="sm" withBorder>
              {isMobile ? (
                // --- VIEW MOBILE ---
                <Flex direction="column" align="center" gap="sm">
                  {edu.icon && (
                    <Image
                      src={edu.icon}
                      alt={`${edu.title} logo`}
                      width={80}
                      height={60}
                      fit="contain"
                      radius="sm"
                      style={{
                        objectFit: "contain",
                        alignSelf: "center",
                      }}
                    />
                  )}

                  <div style={{ textAlign: "center" }}>
                    <Text fw={600}>{edu.title}</Text>
                    <Text size="sm" c="dimmed">
                      {edu.institution} – {edu.year}
                    </Text>
                    <Text size="sm" mt="xs">
                      {edu.description}
                    </Text>
                  </div>
                </Flex>
              ) : (
                // --- VIEW DESKTOP ---
                <Flex align="center" gap="lg">
                  {edu.icon && (
                    <div
                      style={{
                        flex: "0 0 20%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "160px",
                        minWidth: "120px",
                      }}
                    >
                      <Image
                        src={edu.icon}
                        alt={`${edu.title} logo`}
                        fit="contain"
                        radius="md"
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  )}

                  <div style={{ flex: 1 }}>
                    <Text fw={600}>{edu.title}</Text>
                    <Text size="sm" c="dimmed">
                      {edu.institution} – {edu.year}
                    </Text>
                    <Text size="sm" mt="xs">
                      {edu.description}
                    </Text>
                  </div>
                </Flex>
              )}
            </Card>
          ))}
        </section>

        {/* Experience */}
        <section>
          <Title order={3}>Experience</Title>
          {cv.experience.map((exp) => (
            <Card key={exp.role} shadow="sm" mt="sm" withBorder>
              <Text fw={600}>{exp.role}</Text>
              <Text size="sm" c="dimmed">
                {exp.company} – {exp.period}
              </Text>
              <Text size="sm" mt="xs">
                {exp.description}
              </Text>
            </Card>
          ))}
        </section>

        {/* Soft Skills */}
        <section>
          <Title order={3}>Soft Skills</Title>
          <Group mt="sm">
            {cv.softSkills.map((skill) => (
              <Badge key={skill} color="secondary" variant="light">
                {skill}
              </Badge>
            ))}
          </Group>
        </section>
      </Stack>
    </Container>
  );
}