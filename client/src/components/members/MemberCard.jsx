import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    maxWidth: 300,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    maxWidth: 300,
    maxHeight: 300,
  },
  name: {
    textAlign: 'left',
    fontFamily: 'GlacialIndifference',
  },
  year: {
    fontFamily: 'Nunito',
    textAlign: 'right',
    color: '#ff7b7b',
  },
  bio: {
    fontFamily: 'Nunito',
    fontSize: '12pt',
    textAlign: 'left',
  },
};

// SVGs for icon buttons
const logos = {
  github:
    'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  personalSite:
    'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z',
};

let gitbutton;
let libutton;
let personalbutton;

function MemberCard(props) {
  const { selected } = props;
  const {
    giturl, linkedinurl, personalurl, imageSrc, bio, year, name,
  } = selected;
  if (giturl) {
    gitbutton = (
      <IconButton
        onClick={() => {
          const win = window.open(giturl, '_blank');
          win.focus();
        }}
      >
        <SvgIcon>
          <path d={logos.github} />
        </SvgIcon>
      </IconButton>
    );
  }
  if (linkedinurl) {
    libutton = (
      <IconButton
        onClick={() => {
          const win = window.open(linkedinurl, '_blank');
          win.focus();
        }}
      >
        <SvgIcon>
          <path d={logos.linkedin} />
        </SvgIcon>
      </IconButton>
    );
  }
  if (personalurl) {
    personalbutton = (
      <IconButton
        onClick={() => {
          const win = window.open(personalurl, '_blank');
          win.focus();
        }}
      >
        <SvgIcon>
          <path d={logos.personalSite} />
        </SvgIcon>
      </IconButton>
    );
  }
  return (
    <Card style={styles.card}>
      <CardActionArea style={{ color: 'transparent' }}>
        <CardMedia
          style={styles.media}
          component="img"
          alt="Member Card"
          height="345"
          image={imageSrc}
          title="Member Card"
        />
        <CardContent>
          <Grid container justify="space-between">
            <Grid item>
              <Typography gutterBottom variant="h5" component="h2" style={styles.name}>
                {name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h5" component="h2" style={styles.year}>
                {year}
              </Typography>
            </Grid>
          </Grid>
          <Typography component="p" style={styles.bio}>
            {bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: 'center' }}>
        {gitbutton}
        {libutton}
        {personalbutton}
      </CardActions>
    </Card>
  );
}

MemberCard.propTypes = {
  selected: PropTypes.shape({
    giturl: PropTypes.string,
    linkedinurl: PropTypes.string,
    personalurl: PropTypes.string,
    imageSrc: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(MemberCard);
