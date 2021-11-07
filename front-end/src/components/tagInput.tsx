import { useState, useRef } from "react";
import { Button, Grid, Container } from "semantic-ui-react";
import Tag from "./tag";
import dependencies from "../sample/tags3.json";

interface Props {
  handleChange: Function;
}

const getParents = (child: string): Array<string> => {
  const t = dependencies.find((elm) => elm.tag === child);
  const tmp = [t.type, t.domain, t.language].filter((e) => e !== undefined);
  if (t.genre !== undefined) {
    t?.genre.forEach((e) => {
      tmp.push(e);
    });
  }
  return tmp;
};

const TagInput = (props: Props) => {
  const [tags, settags] = useState<Array<string>>([]);
  const list = [
    "javascript",
    "python",
    "go",
    "cpp",
    "ruby",
    "typescript",
    "html",
    "css",
    "semantic-ui",
    "vue",
    "react",
    "express",
    "ruby-on-rails",
    "flask",
    "django",
    "three-js",
    "nuxtjs",
    "nextjs",
    "nginx",
    "apache",
    "docker",
    "ec2",
    "ecs",
    "lambda",
    "s3",
    "amplify",
    "firebase",
    "cloud-functions",
    "compute-engine",
    "cloud-storage",
    "container",
    "nodejs",
    "web-audio-api",
    "github-actions",
    "front-end",
    "back-end",
    "infrastructure",
    "graphic",
    "audio",
    "algorithm",
  ];
  const input = useRef(null);
  const handleClick = async(e: Event) => {
    e.preventDefault();
    const tmp = [...tags];
    if (!tmp.includes(input.current.value)) tmp.push(input.current.value);
    getParents(input.current.value).forEach((e) => {
      if (!tmp.includes(e)) tmp.push(e);
    });
    console.log(tmp);
    settags(tmp);
    console.log(tags);
    input.current.value = "";
    // props.handleChange(tags);
    props.handleChange(tmp);
  };

  return (
    <Container>
      <div style={{ margin: "10px" }}>
        {tags.map((e, index) => (
          <Tag name={e} key={index} />
        ))}
      </div>
      <Grid>
        <Grid.Column width={10}>
          <input
            list="tech"
            type="text"
            ref={input}
            placeholder="仮設置"
          ></input>
          <datalist id="tech">
            {list.map((e) => {
              return <option value={e} key={e} />;
            })}
          </datalist>
        </Grid.Column>
        <Grid.Column width={5}>
          <Button onClick={handleClick}>タグ追加</Button>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default TagInput;
