import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ProjectsCard({ projects, selectedCategory }) {
  return (
    <>
      {projects
        .filter(
          (project) =>
            selectedCategory === "all" || project.category === selectedCategory
        )
        .map((project) => (
          <Card key={project.title} className="projects__card">
            <CardMedia
              className="projects__card-media"
              image={project.image}
              title="groupomania"
            />
            <CardContent className="projects__card-container">
              <Typography className="projects__card-title" variant="h5">
                {project.title}
              </Typography>
              <Typography
                className="projects__card-description"
                variant="body2"
              >
                {project.description}
              </Typography>
            </CardContent>
            <CardActions className="projects__card-infos">
              <Button
                className="projects__card-link"
                href={project.link}
                startIcon={<GitHubIcon />}
                target="_blank"
              >
                GITHUB
              </Button>
              <div className="projects__card-languages">
                {project.langagues.map((langague) => (
                  <p key={langague} className="projects__card-language">
                    {langague}
                  </p>
                ))}
              </div>
            </CardActions>
          </Card>
        ))}
    </>
  );
}
