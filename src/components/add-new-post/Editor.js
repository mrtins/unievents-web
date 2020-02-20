import React from "react";
import { useForm } from 'react-hook-form';
import {
  Card,
  CardBody,
  Form,
  FormInput,
  FormTextarea,
  FormGroup,
  Row,
  Col,
  Button,
  FormSelect
} from "shards-react";

import placeholderEventImage from '../../assets/images/event-image-placeholder.png';

const Editor = ({ register, watch, errors, courseList, locationList }) => {
  const courseId = watch('courseId');

  const addCourse = () => {
    console.log('cousr', courseId);

    console.log(courseList.find((course, i) => course.id == courseId));
  }

  return (
    <Card small className="mb-3">
      <CardBody>
        <FormGroup>
          <label htmlFor="name" className="input-required">Título do Evento</label>

          {errors.name && <p className="error-input">É necessário digitar um título.</p>}
          <FormInput
            id="name"
            name="name"
            size="md"
            className="mb-3"
            placeholder="Digite o título do evento"
            maxLength="120"
            innerRef={register({ required: true, maxLength: 120 })}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="targetAudience">Público Alvo</label>
          <FormInput
            id="targetAudience"
            name="targetAudience"
            size="md"
            className="mb-3"
            placeholder="Digite o público alvo separados por vírgula"
            maxLength="220"
            innerRef={register({ maxLength: 220 })}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="description" className="input-required">Descrição</label>

          {errors.title && <p className="error-input">É necessário digitar uma descrição.</p>}
          <FormTextarea
            id="description"
            name="description"
            size="md"
            placeholder="Digite a descrição do evento"
            innerRef={register({ required: true })}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="local" className="input-required">Localização</label>

          {errors.title && <p className="error-input">É necessário selecionar a localização.</p>}
          <FormSelect id="local" name="localId" size="md" innerRef={register({ required: true })}>
            {locationList.map((location, i) =>
              <option key={i} value={location.id}>{location.name}</option>
            )}
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <label htmlFor="course" className="input-required">Cursos</label>

          {errors.title && <p className="error-input">É necessário selecionar pelo menos um curso.</p>}
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <FormSelect id="course" name="courseId" size="md" style={{ width: '80%' }} innerRef={register({ required: true })}>
              {courseList.map((course, i) =>
                <option key={i} value={course.id}>{course.name}</option>
              )}
            </FormSelect>

            <Button type="button" pill onClick={() => addCourse()}>Adicionar</Button>

          </div>
        </FormGroup>

      <FormGroup>
        <label htmlFor="coverPhoto">Foto de Capa</label>
        <Row>
          <Col>
            <div style={{ textAlign: 'center' }}>
              <img src={placeholderEventImage} alt="Foto de Capa do Evento" style={{ width: '40%' }} />
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div className="custom-file mb-3" style={{ width: '60%', }}>
              <input type="file" className="custom-file-input" id="coverPhoto" innerRef={register} />
              <label className="custom-file-label" htmlFor="coverPhoto">
                Selecionar foto...
                </label>
            </div>
            <div>
              <Button theme="danger" pill outline>Remover</Button>
            </div>
          </Col>
        </Row>
      </FormGroup>
      </CardBody>
    </Card >
  );
}

export default Editor;
