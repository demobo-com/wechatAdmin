/**
 *
 * BlackjackPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Descriptions, Card, Radio, Input, Button, Table, message, Slider, Col, Row } from 'antd';
import _ from 'lodash';
import { compose } from 'redux';

import * as StrapiApi from 'apis/strapi';

// import messages from './messages';
import './styles.scss';

const DescriptionsItem = Descriptions.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const InputSearch = Input.Search;
const sampleSize = 100000;

message.config({
  top: 0,
  duration: 2,
  maxCount: 3,
});
const leaks = [];
const step = 100;
function generateDeck(deckCount, removals) {
  let deck = [];
  for (let i = 0; i < deckCount; i++) {
    deck = deck
      .concat(_.fill(Array(4 * 4), 10))
      .concat(_.fill(Array(4), 1))
      .concat(_.fill(Array(4), 2))
      .concat(_.fill(Array(4), 3))
      .concat(_.fill(Array(4), 4))
      .concat(_.fill(Array(4), 5))
      .concat(_.fill(Array(4), 6))
      .concat(_.fill(Array(4), 7))
      .concat(_.fill(Array(4), 8))
      .concat(_.fill(Array(4), 9));
  }
  removals.forEach((card) => {
    const found = _.findIndex(deck, (c) => c === card);
    _.pullAt(deck, found);
  });
  return deck;
}

export class BlackjackPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      p1: 0,
      p2: 0,
      d1: 0,
      removals: [],
      trainRate: 5,
      type: 'normal',
      preRemoval: [],
      totalLeak: 0,
      streak: 0,
      removalTotal: 2,
      playerTotal: 0,
      dealerTotal: 0,
      removalCard: 0,
    };
    //
    document.addEventListener('keypress', (e) => {
      const target = document.querySelectorAll('.choices button')[Number(e.key) - 1];
      if (target) target.click();
    });
  }

  componentDidMount() {
    window.getLeaks = this.getLeaks;
    StrapiApi.getAllStrategy()
    .then((s) => {
      this.allStrategy = s;
      window.allStrategy = s;
    });
  }

  onNewClick = () => {
    const handStrategy = _.sample(this.specialStrategy);
    console.log(handStrategy);
    this.setState(handStrategy);
  }

  onTrainAll = () => {
    this.specialStrategy = this.allStrategy;
    if (this.state.removalTotal) { this.specialStrategy = this.specialStrategy.filter((s) => s.removals.length === 3 || s.removals.length === this.state.removalTotal + 3); }
    if (this.state.playerTotal) {
      this.specialStrategy = this.specialStrategy.filter((s) => s.p1 + s.p2 === this.state.playerTotal);
    }
    if (this.state.dealerTotal) {
      this.specialStrategy = this.specialStrategy.filter((s) => s.d1 === this.state.dealerTotal);
    }
    if (this.state.removalCard) {
      this.specialStrategy = this.specialStrategy.filter((s) => _.drop(s.removals, 3).includes(this.state.removalCard));
    }
    this.onNewClick();
  }

  onTrainSpecial = () => {
    this.specialStrategy = this.allStrategy.filter((s) => s.isSpecial);
    if (this.state.removalTotal) { this.specialStrategy = this.specialStrategy.filter((s) => s.removals.length === 3 || s.removals.length === this.state.removalTotal + 3); }
    if (this.state.playerTotal) {
      this.specialStrategy = this.specialStrategy.filter((s) => s.p1 + s.p2 === this.state.playerTotal);
    }
    if (this.state.dealerTotal) {
      this.specialStrategy = this.specialStrategy.filter((s) => s.d1 === this.state.dealerTotal);
    }
    if (this.state.removalCard) {
      this.specialStrategy = this.specialStrategy.filter((s) => _.drop(s.removals, 3).includes(this.state.removalCard));
    }
    // console.log(this.specialStrategy);
    this.onNewClick();
  }

  onTrainDidWringOnly = () => {
    this.specialStrategy = this.allStrategy.filter((s) => s.didWrong);
    if (this.state.removalTotal) { this.specialStrategy = this.specialStrategy.filter((s) => s.removals.length === 3 || s.removals.length === this.state.removalTotal + 3); }
    if (this.state.playerTotal) {
      this.specialStrategy = this.specialStrategy.filter((s) => s.p1 + s.p2 === this.state.playerTotal);
    }
    if (this.state.dealerTotal) {
      this.specialStrategy = this.specialStrategy.filter((s) => s.d1 === this.state.dealerTotal);
    }
    if (this.state.removalCard) {
      this.specialStrategy = this.specialStrategy.filter((s) => _.drop(s.removals, 3).includes(this.state.removalCard));
    }
    this.onNewClick();
  }

  onTrainExpensive = () => {
    this.specialStrategy = this.allStrategy.filter((s) => s.leak > 2);
    if (this.state.removalTotal) { this.specialStrategy = this.specialStrategy.filter((s) => s.removals.length === 3 || s.removals.length === this.state.removalTotal + 3); }
    if (this.state.playerTotal) {
      this.specialStrategy = this.specialStrategy.filter((s) => s.p1 + s.p2 === this.state.playerTotal);
    }
    if (this.state.dealerTotal) {
      this.specialStrategy = this.specialStrategy.filter((s) => s.d1 === this.state.dealerTotal);
    }
    if (this.state.removalCard) {
      this.specialStrategy = this.specialStrategy.filter((s) => _.drop(s.removals, 3).includes(this.state.removalCard));
    }
    this.onNewClick();
  }

  onTrainPairs = () => {
    this.specialStrategy = this.allStrategy.filter((s) => s.p1 === s.p2);
    if (this.state.removalTotal) { this.specialStrategy = this.specialStrategy.filter((s) => s.removals.length === 3 || s.removals.length === this.state.removalTotal + 3); }
    if (this.state.playerTotal) {
      this.specialStrategy = this.specialStrategy.filter((s) => s.p1 + s.p2 === this.state.playerTotal);
    }
    if (this.state.dealerTotal) {
      this.specialStrategy = this.specialStrategy.filter((s) => s.d1 === this.state.dealerTotal);
    }
    if (this.state.removalCard) {
      this.specialStrategy = this.specialStrategy.filter((s) => _.drop(s.removals, 3).includes(this.state.removalCard));
    }
    this.onNewClick();
  }

  onTrainAces = () => {
    this.specialStrategy = this.allStrategy.filter((s) => s.p2 === 1);
    if (this.state.removalTotal) { this.specialStrategy = this.specialStrategy.filter((s) => s.removals.length === 3 || s.removals.length === this.state.removalTotal + 3); }
    if (this.state.playerTotal) {
      this.specialStrategy = this.specialStrategy.filter((s) => s.p1 + s.p2 === this.state.playerTotal);
    }
    if (this.state.dealerTotal) {
      this.specialStrategy = this.specialStrategy.filter((s) => s.d1 === this.state.dealerTotal);
    }
    if (this.state.removalCard) {
      this.specialStrategy = this.specialStrategy.filter((s) => _.drop(s.removals, 3).includes(this.state.removalCard));
    }
    this.onNewClick();
  }

  getHandStrategy = (p1, p2, d1, removals) => {
    console.log(p1, p2, d1, removals, this.state.removals, this.state.preRemoval);
    const params = {
      p1, p2, d1, removals,
    };
    StrapiApi.getHandStrategy(params).then((handStrategy) => {
      if (handStrategy.p1 === 1 && handStrategy.p2 === 10) this.onNewClick();
      else if (handStrategy.p1 === 10 && handStrategy.p2 === 1) this.onNewClick();
      else if (_.keys(handStrategy.result).length === 1) this.onNewClick();
      else this.setState(handStrategy);
    });
  };

  getLeaks = () => {
    const leaks = JSON.parse(localStorage.getItem('leaks') || '[]');
    return leaks;
  };

  saveLeak = (result) => {
    let leaks = JSON.parse(localStorage.getItem('leaks') || '[]').concat(result);
    leaks = _.takeRight(leaks, 100);
    localStorage.setItem('leaks', JSON.stringify(leaks));
    return leaks;
  };

  handleTrainRateChange = (trainRate) => {
    this.setState({ trainRate });
  };

  handlePlayerTotalChange = (playerTotal) => {
    this.setState({ playerTotal });
  };

  handleDealerTotalChange = (dealerTotal) => {
    this.setState({ dealerTotal });
  };

  handleRemovalCardChange = (removalCard) => {
    this.setState({ removalCard });
  };

  onHandFilter = (value) => {
    const [p, d] = value.split(' ');
    const [p1, p2] = p.split(',').map(_.trim).map(Number);
    const d1 = Number(d);
    if (p1 && p2 && d1) {
      this.specialStrategy = this.allStrategy.filter((s) => s.p1 === p1 && s.p2 === p2 && s.d1 === d1);
    } else if (p1 && p2 && !d1) {
      this.specialStrategy = this.allStrategy.filter((s) => s.p1 === p1 && s.p2 === p2);
    } else if (p1 && !p2 && d1) {
      this.specialStrategy = this.allStrategy.filter((s) => (s.p1 + s.p2) === p1 && s.d1 === d1);
    } else if (p1 && !p2 && !d1) {
      this.specialStrategy = this.allStrategy.filter((s) => (s.p1 + s.p2) === p1);
    }
    console.log(p1, p2, d1, this.specialStrategy);
    this.onNewClick();
  };

  onSearch = (value) => {
    const removals = value.split(',').map(_.trim).map(Number).concat(this.state.preRemoval);
    const key = [...removals, 2, sampleSize].join('|');
    const handStrategy = _.find(this.allStrategy, (s) => s.key === key);
    if (handStrategy) this.setState(handStrategy);
    this.specialStrategy = this.allStrategy.filter((s) => s.isSpecial);
    this.onNewClick();
  };

  onRemovalSearch = (value) => {
    console.log('onRemovalSearch', value);
    let removals;
    if (value) removals = value.split(',').map(_.trim).map(Number);
    else removals = [];
    this.setState({ preRemoval: removals });
  };

  onTypeChange = (e) => {
    this.setState({
      type: e.target.value,
    });
  };

  renderLeak = () => {
    const dataSource = leaks.map((l, index) => ({
      hands: (index + 1) * step,
      leaks: l,
    }));
    const columns = [
      { title: 'Hands', dataIndex: 'hands', key: 'hands' },
      { title: 'Leaks', dataIndex: 'leaks', key: 'leaks' },
    ];
    return (<div>
      <Descriptions title="" layout="vertical" bordered>
        <DescriptionsItem label="Total Hands">{this.state.streak}</DescriptionsItem>
        <DescriptionsItem label="Total Leaks">{this.state.totalLeak}</DescriptionsItem>
      </Descriptions>
      <Table dataSource={dataSource} columns={columns} />
    </div>);
  };

  render() {
    let { p1, p2, d1, removals, result, best, trainRate, leak, preRemoval, playerTotal, dealerTotal, removalCard } = this.state;
    const choices = _.keys(result);
    if (p1 === 1) p1 = 'A';
    if (p2 === 1) p2 = 'A';
    if (d1 === 1) d1 = 'A';
    const removalsArray = _.drop(removals, 3).map((c) => c === 1 ? 'A' : c);
    const removalsString = removalsArray.join(' ');
    return (
      <div className="blackjack_page">
        <Row gutter={[16, 16]}>
          <Col span={10}>
            {this.renderLeak()}
          </Col>
          <Col span={14}>
            <Button onClick={this.onTrainAll}>Train All</Button>
            <Button onClick={this.onTrainSpecial}>Train Special</Button>
            <Button onClick={this.onTrainDidWringOnly}>Train DidWrong</Button>
            <Button onClick={this.onTrainExpensive}>Train Expensive</Button>
            <Button onClick={this.onTrainPairs}>Train Pairs</Button>
            <Button onClick={this.onTrainAces}>Train Aces</Button>
            <b />
            <div>Removals</div>
            <Slider max={10} onChange={this.handleRemovalCardChange} value={removalCard} />
            <div>Dealer</div>
            <Slider max={10} onChange={this.handleDealerTotalChange} value={dealerTotal} />
            <div>Player</div>
            <Slider max={20} onChange={this.handlePlayerTotalChange} value={playerTotal} />
            {false &&
            <Card bordered={false} style={{ width: '100%' }}>
              <InputSearch onSearch={this.onHandFilter} />

              <div>
                <RadioGroup defaultValue="normal" buttonStyle="solid" onChange={this.onTypeChange}>
                  <RadioButton value="normal">Normal</RadioButton>
                  <RadioButton value="pair">Pair</RadioButton>
                  <RadioButton value="ace">Ace</RadioButton>
                </RadioGroup>
                <Slider max={10} onChange={this.handleTrainRateChange} value={trainRate} />
                <div>
                  <InputSearch onSearch={this.onSearch} />
                  <InputSearch onSearch={this.onRemovalSearch} />
                </div>
              </div>
            </Card>
}
            <div className="removals">
              {removalsArray.map((r, i) => <div className="card" key={i}>{r}</div>)}
            </div>
            <div className="dealer">
              <div className="card">{d1}</div>
            </div>
            <div className="player">
              <div className="card">{p1}</div>
              <div className="card">{p2}</div>
            </div>
            <div className="choices">
              {choices.map((c) => {
                const onClick = () => {
                  const actionleak = result[best] - result[c];
                  message.destroy();
                  console.log(actionleak);
                  if (actionleak > 0.3) {
                    const totalLeak = Number((this.state.totalLeak + actionleak).toFixed(2));
                    message.error(`${p1} ${p2} vs ${d1} ${removalsString} ${best}. You lost $${actionleak.toFixed(2)}`, 100);
                    StrapiApi.setDidWrong(this.state.id);
                    this.setState({ totalLeak });
                  // this.saveLeak(gameState);
                  } else {
                    const streak = this.state.streak + 1;
                    if (!(streak % step)) {
                      leaks.push(Number((this.state.totalLeak - _.sum(leaks)).toFixed(2)));
                    }
                    this.onNewClick();
                    message.success(`${p1} ${p2} vs ${d1} ${removalsString} ${best}. You save $${leak.toFixed(2)}`, 100);
                    this.setState({ streak });
                  }
                };
                return <Button key={c} onClick={onClick}>{c}</Button>;
              })}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}


BlackjackPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(BlackjackPage);
