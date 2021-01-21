import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { SourceRef } from '../helpers/sourceHelper'

type SourceViewerProps = {
  sourceUrl: string
  onLoad: (sourceRef: SourceRef) => void
}

function SourceViewer(props: SourceViewerProps) {
  const classes = useStyles()

  if (props.sourceUrl.endsWith('.jpg')) {
    return (
      <img
        className={classes.root}
        src={props.sourceUrl}
        alt=""
        onLoad={(event) => {
          props.onLoad({ source: event.target as HTMLImageElement })
        }}
      />
    )
  } else {
    return (
      <video
        className={classes.root}
        src={props.sourceUrl}
        autoPlay
        loop
        onLoadedData={(event) => {
          props.onLoad({ source: event.target as HTMLVideoElement })
        }}
      />
    )
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: theme.spacing(52),
      objectFit: 'cover',
    },
  })
)

export default SourceViewer