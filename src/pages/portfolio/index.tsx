import React from "react";
import { connect } from "react-redux";

import { Rows, Link, Slides } from "../../components";
import { ApplicationState } from "../../store";
import { Project } from "../../store/projects/types";
import { Title, Description, Techs } from "./styles";

interface State {
  num: number;
}

interface PropsFromState {
  projects: Project[];
  loading: boolean;
  errors?: string | undefined;
}

interface OwnProps {
  in: boolean;
}

type AllProps = OwnProps & PropsFromState;

class Portfolio extends React.Component<AllProps, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      num: 0
    };

    this.changeNum = this.changeNum.bind(this);
  }

  changeNum(num: number) {
    this.setState({ num });
  }

  renderTop() {
    const project = this.props.projects[this.state.num];

    return <img src={project.image} alt={project.name} />;
  }

  renderBottom() {
    const project = this.props.projects[this.state.num];

    return (
      <React.Fragment>
        <Title>{project.name}</Title>
        <Description>{project.description}</Description>
        <Techs>{project.techs}</Techs>
        <Link.External href={project.url} target="_blank">
          see more
        </Link.External>
      </React.Fragment>
    );
  }

  render() {
    const { loading, projects } = this.props;
    const { num } = this.state;

    return (
      !loading && (
        <React.Fragment>
          <Rows top={this.renderTop()} bottom={this.renderBottom()} num={num} />
          <Slides
            length={projects.length}
            selected={this.state.num}
            onSelect={this.changeNum}
            onPrev={() => this.changeNum(num - 1)}
            onNext={() => this.changeNum(num + 1)}
          />
        </React.Fragment>
      )
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  projects: state.projects.data,
  loading: state.projects.loading,
  errors: state.projects.errors
});

export default connect(mapStateToProps)(Portfolio);
