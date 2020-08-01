import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import CompanyActions from '~/store/ducks/companies';

function CompanySwitecher({
  open,
  toggleSwitch,
  companies,
  getCompaniesRequest,
}) {
  useEffect(() => {
    getCompaniesRequest();
  }, [getCompaniesRequest]);

  return (
    <Dialog
      onClose={toggleSwitch}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {companies.map((company) => (
          <ListItem button onClick={() => {}} key={company.id}>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={company.name} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => {}}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

CompanySwitecher.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleSwitch: PropTypes.func.isRequired,
  companies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getCompaniesRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  companies: state.companies.data,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CompanyActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CompanySwitecher);
