package com.teect.appmgr.bean;

import java.util.Date;

public class BdDevice {
    private String id;

    private String imei;

    private String org;

    private String man;

    private String phone;

    private String createBy;

    private Date createDate;

    private String updateBy;

    private Date updateDate;

    private String remarks;

    private String flag;

    private Date oldservicedate;
    private Date servicedate;

    private String remainsDays;

    private String zcrq;
    private  String fwrq;
    private String type;

    public Date getOldservicedate() {
        return oldservicedate;
    }

    public void setOldservicedate(Date oldservicedate) {
        this.oldservicedate = oldservicedate;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getZcrq() {
        return zcrq;
    }

    public void setZcrq(String zcrq) {
        this.zcrq = zcrq;
    }

    public String getFwrq() {

        return fwrq;
    }

    public void setFwrq(String fwrq) {
        this.fwrq = fwrq;
    }

    private String state;

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getRemainsDays() {

        return remainsDays;
    }

    public void setRemainsDays(String remainsDays) {
        this.remainsDays = remainsDays;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getImei() {
        return imei;
    }

    public void setImei(String imei) {
        this.imei = imei == null ? null : imei.trim();
    }

    public String getOrg() {
        return org;
    }

    public void setOrg(String org) {
        this.org = org == null ? null : org.trim();
    }

    public String getMan() {
        return man;
    }

    public void setMan(String man) {
        this.man = man == null ? null : man.trim();
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public String getCreateBy() {
        return createBy;
    }

    public void setCreateBy(String createBy) {
        this.createBy = createBy == null ? null : createBy.trim();
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getUpdateBy() {
        return updateBy;
    }

    public void setUpdateBy(String updateBy) {
        this.updateBy = updateBy == null ? null : updateBy.trim();
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks == null ? null : remarks.trim();
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag == null ? null : flag.trim();
    }

    public Date getServicedate() {
        return servicedate;
    }

    public void setServicedate(Date servicedate) {
        this.servicedate = servicedate;
    }
}