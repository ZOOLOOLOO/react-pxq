import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import PropTypes from 'prop-types';
import API from '@/api/api';
import envconfig from '@/envconfig/envconfig';
import { saveFormData, saveImg, clearData } from '@/store/home/action';
import { clearSelected } from '@/store/production/action';
import PublicHeader from '@/components/header/header';
import PublicAlert from '@/components/alert/alert';
import TouchableOpacity from '@/components/TouchableOpacity/TouchableOpacity';
import mixin, { padStr } from '@/utils/mixin';
import './apply.css';

class MApply extends Component {
  static propTypes = {
  }

  state = {
  }

  componentWillReceiveProps(nextProps){
  }

  shouldComponentUpdate(nextProps, nextState) {
  }

  componentWillMount(){
  }

  render() {
    return (
      <main className="apply-container">
        <header className="apply-header">期待您的加入</header>
        <p className="common-title">请录入您的信息</p>
        <div className="apply-wrapper">
          <iframe className="apply-iframe" src="https://staging008.mokahr.com/m/apply/livingsimple#/job/2ee716bc-34e0-4015-a8c4-84e293625fcd/select?pure=1"/>
        </div>
      </main>
    );
  }
}

export default connect(state => ({
}), {
})(MApply);
