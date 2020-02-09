import React, { useState } from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  Badge,
  CardTitle,
} from "shards-react";

import { formatDate } from '../../utils/date';

const EventCards = ({ eventList, history }) => {
  return (
    <Row>
      {eventList.map((event, idx) => (
        <Col lg="4" key={idx}>
          <div style={{ cursor: 'pointer' }} onClick={() => history.push(`/detalhes-evento/${event.id}`)}>
            <Card
              className="card-post mb-4"
              style={{
                backgroundColor: event.eventDate > new Date() ? 'rgba(214, 214, 214, 0.6)' : '#fff',
                height: '100%',
              }}
            >
              <CardBody style={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div>
                  <span style={{ color: event.eventDate > new Date() ? null : '#007bff' }}>{formatDate(event.eventDate)}</span>
                  {event.eventDate > new Date() ?
                    <Badge theme="success " style={{ float: 'right' }}>Finalizado</Badge>
                    : null}
                  <a title={event.name} href="#event"><CardTitle className="event-title">{event.name}</CardTitle></a>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <Badge
                    theme="primary"
                    style={{ backgroundColor: event.finalizado ? '#4e545b' : null }}
                  >
                    {event.course || 'Todos os Cursos'}
                  </Badge>
                  <div>
                    <i className="material-icons">pin_drop</i>
                    <p className="card-text text-muted" style={{ display: 'inline-block', paddingLeft: '5px', marginBottom: 0 }}>{event.local || 'Unigranrio'}</p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      <i className="material-icons">person</i>
                      <p className="card-text text-muted" style={{ display: 'inline-block', paddingLeft: '5px', marginBottom: 0 }}>{event.qtEnrollment || 'Nenhuma inscrição'}</p>
                    </div>
                    {/* <div>
                  <i className="material-icons" style={{ color: '#17c671' }}>done_all</i>
                  <p className="card-text" style={{ display: 'inline-block', paddingLeft: '5px', marginBottom: 0, color: '#17c671' }}>20 compareceram</p>
                </div> */}
                  </div>
                </div>

              </CardBody>
            </Card>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default EventCards;